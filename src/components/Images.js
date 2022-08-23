import Background from 'C:\Users\Robert\workspace\WhetherFleura-Capstone\whetherfleura-capstone\Stock Eyes.jpg';



export const Image = () => {
var sectionStyle = {
  width: "100%",
  height: "400px",
  backgroundImage: `url(${Background})`
};

class Section extends Component {
  render() {
    return (
      <section style={ sectionStyle }>
      </section>
    );
  }
}
}