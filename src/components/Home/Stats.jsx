import './styles/stats.css';
import statsInfo from '../../utils/stats-info';

const Stats = () => {
  return (
    <section className="stats">
      <div className="container-stats grilla">
        <h2 className="subtitulo">
          En más de <span>15 años</span> de experiencia hemos realizado
        </h2>
        {statsInfo.map((stat) => (
          <div key={stat.message} className="box">
            <h2>
              <span>+ </span>
              {stat.stat}
            </h2>
            <p>{stat.message}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
