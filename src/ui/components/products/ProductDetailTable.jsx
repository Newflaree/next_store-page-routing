export const ProductDetailTable = () => {
  return (
    <table className='table-fixed w-full border mt-8 shadow-xl'>
      <thead className='bg-mupu text-white'>
        <tr className='border'>
          <th className="w-1/4 ... p-2">Escpecificación</th>
          <th className="w-1/2 ...">Detalle</th>
        </tr>
      </thead>

      <tbody className='bg-white'>
        <tr className='border'>
          <td className='pl-4 font-bold border'>Mecánicas</td>
          <td className=' flex flex-col p-4 '>
            <span>Dimmesiones: 85 x 40 x 15 mm (sin antena)</span>
            <span>Peso: 70g</span>
            <span>Temperatura de operación: -40 a 85 °C</span>
          </td>
        </tr>

        <tr className='border'>
          <td className='pl-4 font-bold border'>Eléctricos</td>
          <td className=' flex flex-col p-4'>
            <span>Voltaje de entrada: 4.75 - 5.5 V</span>
            <span>Sesgo de CC de la antena: 3.3 V</span>
            <span>Consumo máximo de corriente: 5V @ 250 mA</span>
            <span>Consumo promedio de corriente: 5V @ 120 mA</span>
            <span>Límite de corriente en el cable USB: 500 mA</span>
          </td>
        </tr>

        <tr className='border'>
          <td className='pl-4 font-bold border'>Conectividad</td>
          <td className=' flex flex-col p-4'>
            <span>Bluetooth V4.2 BR/EDR</span>
            <span>USB Serial</span>
          </td>
        </tr>

        <tr className='border'>
          <td className='pl-4 font-bold border'>GNSS</td>
          <td className=' flex flex-col p-4'>
            <span>Recepción concurrente de GPS, GLONASS, Galileo y BeiDou</span>
            <span>Dimmesiones: 85 x 40 x 15 mm (sin antena)</span>
            <span>Recibe bandas L1C/A y L2C</span>
            <span>Señales rastreadas GPS/QZSS L1 C/A, L2 GLONASS L1OF, L2 BeiDou B1l, B2l Galileo E1-B/C, E5b</span>
            <span>Número de canales 184</span>
            <span>Tasa de actualización de navegación: 1 Hz GNSS</span>
            <span>Precisión de posición: NTRIP 0.01 m + 1 ppm CEP</span>
            <span>Tiempo de convergencia: NTRIP  10 sec</span>
            <span>Altitud máxima: 50 km (31 millas)</span>
            <span>Velocidad máxima: 500 m/s (1118 mph)</span>
          </td>
        </tr>

        <tr className='border'>
          <td className='pl-4 font-bold border'>Láser</td>
          <td className=' flex flex-col p-4'>
            <span>Láser de punto rojo</span>
            <span>Precisión: ±10 mm, el indicador rojo varía ligeramente</span>
            <span>Longitud de onda del láser: 650 mm</span>
            <span>Modo de haz</span>
            <span>Dimensiones: 8 * 13.5 mm</span>
            <span>Vida útil: ≥5000h</span>
            <span>Potencia óptica: 1-100mw</span>
            <span>Rango de voltaje: 3V-8V</span>
            <span>Corriente de operación: ≤150mA</span>
            <span>Rango de temperatura de operación: -25~65 °C</span>
            <span>Ángulo de desviación de la luz: ±2°</span>
            <span>{ 'Tamaño del punto del haz a 10 m: <15 mm' }</span>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
