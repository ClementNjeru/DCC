import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="image1"
          src="https://scontent.fnbo1-1.fna.fbcdn.net/v/t31.18172-8/20989301_1466450503400491_2693343638927482699_o.jpg?_nc_cat=106&ccb=1-7&_nc_sid=e3f864&_nc_ohc=185JBoRAjmMAX-tnaRS&_nc_ht=scontent.fnbo1-1.fna&oh=00_AfDa8Nr273DiW4x6SbLGAszKav1tr4jzN5R6Kt1qiQpuvA&oe=642643EB"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Mathew 28:19</h3>
          <p>"Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit"</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="image"
          src="https://scontent.fnbo1-1.fna.fbcdn.net/v/t31.18172-8/1078934_557407400971477_1740026176_o.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=hFOjdctdHsAAX_d7y7v&_nc_ht=scontent.fnbo1-1.fna&oh=00_AfD2m3JOsP9iSnLdCxOjUAU4GLuWfVFiH26RSILqPkFikA&oe=64266362"
          
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="image3"
          src="https://scontent.fnbo1-1.fna.fbcdn.net/v/t31.18172-8/1978397_655853627793520_711637210_o.jpg?_nc_cat=105&ccb=1-7&_nc_sid=9267fe&_nc_ohc=FfOyRCLQCi4AX_0p3p1&_nc_ht=scontent.fnbo1-1.fna&oh=00_AfCI-wTWtoabcOoNNpUpuhNK-gxuLPyu1o5mOGHTseHpbQ&oe=64264E6F"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;