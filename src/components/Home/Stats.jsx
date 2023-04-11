import './styles/stats.css';
import statsInfo from '../../utils/stats-info';

const Stats = () => {
  return (
    <section className="stats">
      <div className="container-stats grilla">
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
