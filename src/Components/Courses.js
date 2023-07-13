import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const Courses = () => {
  const courses = [
    {
      name: 'C++',
      image: 'https://www.analyticsinsight.net/wp-content/uploads/2022/03/bh1-1024x725-1.jpg',
      wikiLink: 'https://en.wikipedia.org/wiki/C%2B%2B',
    },
    {
      name: 'C',
      image: 'https://contentstatic.techgig.com/photo/90325682.cms',
      wikiLink: 'https://en.wikipedia.org/wiki/C_(programming_language)',
    },
    {
      name: 'Python',
      image: 'https://images.ctfassets.net/mrop88jh71hl/55rrbZfwMaURHZKAUc5oOW/9e5fe805eb03135b82e962e92169ce6d/python-programming-language.png',
      wikiLink: 'https://en.wikipedia.org/wiki/Python_(programming_language)',
    },
    {
      name: 'Java',
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png',
      wikiLink: 'https://en.wikipedia.org/wiki/Java_(programming_language)',
    },
    {
      name: 'SQL',
      image: 'https://e7.pngegg.com/pngimages/134/190/png-clipart-sql-logo-microsoft-sql-server-mysql-database-logo-others-blue-text-thumbnail.png',
      wikiLink: 'https://en.wikipedia.org/wiki/SQL',
    },
    {
      name: 'HTML',
      image: 'https://w7.pngwing.com/pngs/201/90/png-transparent-logo-html-html5.png',
      wikiLink: 'https://en.wikipedia.org/wiki/HTML',
    },
  ];

  return (
    <div className="container">
      <h1 className="text-center">Courses</h1>
      <div className="row">
        {courses.map((course, index) => (
          <div className="col-md-4" key={index}>
            <div className="card h-100">
              <img src={course.image} alt={course.name} className="card-img-top img-fluid" style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body d-flex flex-column">
                <h3 className="card-title text-center">{course.name}</h3>
                <div className="mt-auto">
                  <a href={course.wikiLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
