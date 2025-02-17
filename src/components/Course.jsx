import React from "react";

const Course = ({ courses }) => {
  return (
    <div>
      <div>
        {courses.map((course) => {
          const totalExcercises = course.parts.reduce(
            (sum, part) => sum + part.exercises,
            0
          );
          return (
            <div key={course.id}>
              <h2>{course.name}</h2>
              <div>
                {course.parts.map((part) => (
                  <div key={part.id}>
                    {part.name} {part.exercises}
                  </div>
                ))}
              </div>
              <p> Total of {totalExcercises} Excercises</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Course;
