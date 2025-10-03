import './SnowParticles.css'

const SnowParticles = () => {
  const snowflakes = Array.from({ length: 70 }, (_, i) => i)

  const getSnowflakePosition = (index: number): string => {
    const positions = [
      '3vw', '8vw', '13vw', '18vw', '23vw', '28vw', '33vw', '38vw', '43vw', '48vw',
      '53vw', '58vw', '63vw', '68vw', '73vw', '78vw', '83vw', '88vw', '1vw', '5vw',
      '9vw', '13vw', '17vw', '21vw', '25vw', '29vw', '33vw', '37vw', '41vw', '45vw',
      '49vw', '53vw', '57vw', '61vw', '65vw', '69vw', '73vw', '77vw', '81vw', '85vw',
      '89vw', '93vw', '97vw', '99vw', '2vw', '6vw', '10vw', '14vw', '18vw', '22vw',
      '26vw', '30vw', '34vw', '38vw', '42vw', '46vw', '50vw', '54vw', '58vw', '62vw',
      '66vw', '70vw', '74vw', '78vw', '82vw', '86vw', '90vw', '94vw', '98vw', '50vw'
    ]
    return positions[index % positions.length]
  }

  const getSnowflakeDelay = (index: number): string => {
    const delays = [
      '0s', '2s', '4s', '1s', '3s', '5s', '2.5s', '1.5s', '3.5s', '0.5s',
      '1.2s', '2.8s', '4.1s', '0.9s', '3.3s', '2.2s', '1.7s', '3.8s', '0.7s', '1.5s',
      '2.7s', '3.9s', '0.1s', '1.3s', '2.5s', '3.7s', '0.9s', '2.1s', '3.3s', '0.7s',
      '1.9s', '3.1s', '0.4s', '1.6s', '2.8s', '4s', '0.9s', '2.1s', '3.3s', '0.7s'
    ]
    return delays[index % delays.length]
  }

  const getSnowflakeDuration = (index: number): string => {
    const durations = [
      '7s', '8s', '7.5s', '8.5s', '7.2s', '8.2s', '7.8s', '8.1s', '7.3s', '8.3s',
      '7.7s', '8.4s', '7.6s', '8.2s', '7.9s', '8.1s', '7.4s', '8.5s', '7.1s', '8.1s',
      '7.4s', '8.5s', '7.1s', '8.3s', '7.2s', '8.4s', '7.3s', '8.5s', '7.4s', '8.2s'
    ]
    return durations[index % durations.length]
  }

  const getSnowflakeSize = (index: number): string => {
    const sizes = [
      '1.1rem', '1.3rem', '1.1rem', '1.4rem', '1.2rem', '1.1rem', '1.3rem', '1.2rem',
      '1.1rem', '1.3rem', '1.2rem', '1.1rem', '1.4rem', '1.2rem', '1.1rem', '1.3rem'
    ]
    return sizes[index % sizes.length]
  }

  return (
    <div className="css-snow">
      {snowflakes.map((_, index) => (
        <span
          key={index}
          className="css-snowflake"
          style={{
            left: getSnowflakePosition(index),
            animationDelay: getSnowflakeDelay(index),
            animationDuration: getSnowflakeDuration(index),
            fontSize: getSnowflakeSize(index)
          }}
        >
          ❄
        </span>
      ))}
    </div>
  )
}

export default SnowParticles