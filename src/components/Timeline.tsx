import dhol from "../assets/dhol1.jpg";
import ganesh from "../assets/ganesh.jpg";
import garland from "../assets/garland.png";
import kanyadan from "../assets/kanyadan.png";
import flame from "../assets/flame.png";
import footprint from "../assets/footprint2.png";
const Timeline = () => {

  return (
    <div className="timeline">
      <div className="event">
        <div className="event-text">
          <h2>Baraat</h2>
          <img src={dhol}/>
        </div>
        <p>Rohith, his family, and friends arrive at the venue, accompanied by music, a beating dhol (drum), and their best dance moves.</p>
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
        <p>After Harena's grand entrance, Rohith and Harena meet each other and signify their choice and acceptance of each other with the exchange of flower garlands</p>
      </div>
      <div className="event">
        <div className="event-text">
          <h2>Kanyadan</h2>
          <img src={kanyadan}/>
        </div>
        <p>The bride's parents formally give away their daughter, entrusting Harena to Rohith and his family. Rohith's scarf is tied to Harena's, representing acceptance and a new bond.</p>
      </div>
      <div className="event">
        <div className="event-text">
          <h2>Agni Pooja</h2>
          <img src={flame}/>
        </div>
        <p>Fire can represent creation in Hinduism. It is the ultimate witness and signfies the couple's new journey in the pursuit of knowledge, and dispelling darkness.</p>
      </div>
      <div className="event">
        <div className="event-text">
          <h2>Mangal Phere</h2>
          <img src={footprint}/>
        </div>
        <p>Harena and Rohith now circle the fire seven times. This ritual affirms principles of Dharma (virtue), Artha (wealth), Kama (family), and Moksha (enlightenment).</p>
      </div>
    </div>
  );
}

export default Timeline;