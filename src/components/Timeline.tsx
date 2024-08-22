import dhol from "../assets/dhol1.jpg";
import ganesh from "../assets/ganesh.jpg";
import garland from "../assets/garland.png";
const Timeline = () => {

  return (
    <div className="timeline">
      <div className="event">
        <div className="event-text">
          <h2>Baraat</h2>
          <img src={dhol}/>
        </div>
        <p>Rohith, his family, and friends arrive at the venue, accomponied by music, a beating dhol (drum), and their best dance moves.</p>
      </div>
      <div className="event">
        <div className="event-text">
          <h2 id="ganesh">Ganesh Pooja</h2>
          <img src={ganesh}/>
        </div>
        <p>The ceremony begins with a prayer to Lord Ganesha, an eternal symbol of peace, happiness, and friendship.</p>
      </div>
      <div className="event">
        <div className="event-text">
          <h2>Jai Mala</h2>
          <img src={garland}/>
        </div>
        <p>Hindu ceremonies start with the groom and bride's parents. Now that Rohith has been accepted by the family, it's time to bring Harena to the mandap. Rohith's chawl is tied to Varsha's dupatta (scarf), representing acceptance and a new bond.</p>
      </div>
    </div>
  );
}

export default Timeline;