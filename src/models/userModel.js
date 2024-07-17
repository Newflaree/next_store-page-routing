// Mongoose
import {
  Schema,
  model,
} from 'mongoose';


const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true,
    enum: {
      values: [ 'ADMIN_ROLE', 'CLIENT_ROLE' ],
      message: '{VALUE} No es un role válido',
      default: 'CLIENT_ROLE',
      required: true
    }
  }
}, {
  timestamps: true
});

UserSchema.methods.toJSON = function() {
  const { __v, password, ...user } = this.toObject();
  return user;
}


export default model( 'User', UserSchema );
