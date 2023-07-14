import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const Courses = () => {
  const courses = [
    {
      name: 'R',
      image: 'https://tse2.mm.bing.net/th?id=OIP.CBQbwDeel0-rNGwfAwWn6wHaEa&pid=Api&P=0&h=180',
      wikiLink: 'https://en.wikipedia.org/wiki/R_(programming_language)',
    },
    {
      name: 'C',
      image: 'https://tse4.mm.bing.net/th?id=OIP.0D9zGIQXQEIZFYD9tpRXgQAAAA&pid=Api&P=0&h=180',
      wikiLink: 'https://www.guru99.com/c-programming-language.html',
    },
    {
      name: 'Python',
      image: 'https://tse2.mm.bing.net/th?id=OIP.146KT0gacYdSQBkPBLYCSAHaFU&pid=Api&P=0&h=180',
      wikiLink: 'https://www.geeksforgeeks.org/introduction-to-python/',
    },
    {
      name: 'C++',
      image: 'https://tse1.mm.bing.net/th?id=OIP.DscoqNeDks-BqP83UoHjPgHaEK&pid=Api&P=0&h=180',
      wikiLink: 'https://en.wikipedia.org/wiki/C%2B%2B',
    },
    {
      name: 'SQL',
      image: 'https://www.harrisburgu.edu/wp-content/uploads/sql-for-analytics-course-main.jpg',
      wikiLink: 'https://www.w3schools.com/sql/sql_intro.asp',
    },
    {
      name: 'Ruby',
      image: 'https://tse4.mm.bing.net/th?id=OIP.P6StsD5U9kIBK7W8vUDziAHaD1&pid=Api&P=0&h=180',
      wikiLink: 'https://en.wikipedia.org/wiki/Ruby_(programming_language)',
      price:"$500",
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
