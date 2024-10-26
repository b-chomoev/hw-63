import Beks from '../../assets/photo_2024-10-21_01-19-00.png';

const AboutUs = () => {
  return (
    <div>
      <h2 className="text-dark-emphasis">About Me</h2>
      <div className="float-start pe-5">
        <img src={Beks} className="img-fluid rounded-4" alt="Beks photo" style={{width: 350}}/>
      </div>
      <div>
        <h3>Childhood</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ante justo, pretium in ullamcorper ac,
          porttitor sit amet ante. Aenean vestibulum nulla sagittis diam fermentum scelerisque. Aenean nunc nunc,
          fermentum ac fermentum vitae, consequat a quam. Vivamus vitae metus at ipsum pellentesque facilisis. Duis ut
          elementum purus, vehicula aliquam eros. Maecenas dignissim mi eget nunc sollicitudin malesuada. Fusce ut
          hendrerit elit. Curabitur feugiat sapien volutpat sapien scelerisque, non ullamcorper elit varius.
        </p>
        <p>
          Curabitur a massa eu elit pellentesque porttitor. Ut eget pretium dui. Morbi volutpat, justo ut efficitur
          rhoncus, ligula ligula viverra lectus, eget dignissim nibh urna ac nibh. Nulla eros ex, vestibulum nec elit
          et, bibendum egestas ligula. Etiam dapibus tellus eget massa lobortis cursus. Aenean posuere lectus ac massa
          viverra convallis. Etiam volutpat sem velit, sed malesuada augue ullamcorper eu. Praesent nulla neque, viverra
          vitae elementum ac, faucibus nec dolor. Aliquam sed accumsan enim. Nam eu fringilla arcu. Vivamus convallis
          libero vel urna cursus, sed fringilla sem convallis. Quisque convallis condimentum felis sit amet feugiat.
          Quisque dolor metus, dapibus eget lobortis at, hendrerit eget lorem. Quisque id orci eu leo tincidunt dapibus.
          Ut id dui quam.
        </p>
        <h3>Work Experience</h3>
        <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus a purus at
          orci molestie fringilla non placerat nibh. Cras ac nisi ante. Vestibulum posuere urna quis dolor convallis
          commodo. Curabitur augue ex, vehicula quis sapien non, dignissim imperdiet est. Aenean sed nisl facilisis,
          rutrum nulla in, tincidunt justo. Sed fermentum nibh augue, et facilisis ligula imperdiet id. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

          Nullam eget scelerisque nunc, eu congue nisi. Phasellus id ex est. Etiam congue, erat eu fringilla elementum,
          arcu libero condimentum dui, eu tristique dolor lacus eu tellus. Suspendisse fringilla odio nunc, quis varius
          purus iaculis vestibulum. Sed id dui et tortor lobortis maximus a eu nulla. Sed massa elit, condimentum ac
          bibendum sit amet, varius id justo. Morbi eu erat nisl. Quisque risus nulla, sollicitudin et feugiat
          condimentum, finibus ut lorem. Donec sit amet mi aliquet, porttitor est vel, lacinia ligula. Mauris in nisl
          ornare, sagittis odio sit amet, posuere magna. Sed felis nisi, sollicitudin consequat velit eget, fermentum
          consectetur justo. Morbi vehicula a massa eu sollicitudin. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Phasellus a purus at
          orci molestie fringilla non placerat nibh. Cras ac nisi ante. Vestibulum posuere urna quis dolor convallis
          commodo. Curabitur augue ex, vehicula quis sapien non, dignissim imperdiet est. Aenean sed nisl facilisis,
          rutrum nulla in, tincidunt justo. Sed fermentum nibh augue, et facilisis ligula imperdiet id. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;