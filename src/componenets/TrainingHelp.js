import React, { useState } from 'react';
import TrainingSearch from './TrainingSearch';
import './TrainingHelp.css';

import GoogleFormButton from './GoogleFormButton';
const TrainingPage = () => {
  const [selectedMuscleGroups, setSelectedMuscleGroups] = useState([]);
  const muscleGroups = ['Quads', 'Shoulders', 'Biceps', 'Triceps', 'Calves', 'Hamstrings', 'Back', 'Chest', 'Abs'];

  const handleMuscleGroupChange = (e) => {
    const muscleGroup = e.target.value;
    if (e.target.checked) {
      setSelectedMuscleGroups([...selectedMuscleGroups, muscleGroup]);
    } else {
      setSelectedMuscleGroups(selectedMuscleGroups.filter((group) => group !== muscleGroup));
    }
  };

  const VideoCard = ({ video }) => {
    return (
      <div className="card4">
        <a href={video.videoLink} target="_blank" rel="noopener noreferrer">
          <img src={video.image} alt={video.title} className="card-image" />
        </a>
        <h3>{video.title}</h3>
        <p>Muscle Group: {video.muscleGroup}</p>
      </div>
    );
  };

  const videos = [
    {
      title: 'Squat Tutorial',
      muscleGroup: 'Quads',
      videoLink: 'https://www.youtube.com/watch?v=xqvCmoLULNY',
      image: 'https://i.ytimg.com/vi/xqvCmoLULNY/maxresdefault.jpg',
    },
    {
      title: 'Shoulder Press',
      muscleGroup: 'Shoulders',
      videoLink: 'https://www.youtube.com/watch?v=qEwKCR5JCog',
      image: 'https://i.ytimg.com/vi/qEwKCR5JCog/maxresdefault.jpg',
    },
    {
      title: 'Bicep Curl',
      muscleGroup: 'Biceps',
      videoLink: 'https://www.youtube.com/watch?v=in7PaeYlhrM',
      image: 'https://i.ytimg.com/vi/in7PaeYlhrM/maxresdefault.jpg',
    },
    {
      title: 'Tricep Pull Down',
      muscleGroup: 'Triceps',
      videoLink: 'https://www.youtube.com/watch?v=3jxrjl4B8-U',
      image: 'https://i.ytimg.com/vi/3jxrjl4B8-U/maxresdefault.jpg',
    },
    {
      title: 'Calf Raises',
      muscleGroup: 'Calves',
      videoLink: 'https://www.youtube.com/watch?v=JbyjNymZOt0',
      image: 'https://i.ytimg.com/vi/JbyjNymZOt0/maxresdefault.jpg',
    },
    {
      title: 'Hamstring Curl',
      muscleGroup: 'Hamstrings',
      videoLink: 'https://www.youtube.com/watch?v=bvs-Y_qgghE',
      image: 'https://i.ytimg.com/vi/bvs-Y_qgghE/maxresdefault.jpg',
    },
    {
      title: 'Lat Pulldown',
      muscleGroup: 'Back',
      videoLink: 'https://www.youtube.com/watch?v=an1BMInTXLk',
      image: 'https://i.ytimg.com/vi/an1BMInTXLk/maxresdefault.jpg',
    },
    {
      title: 'Chest Workout at the Gym',
      muscleGroup: 'Chest',
      videoLink: 'https://www.youtube.com/watch?v=QsYre__-aro',
      image: 'https://i.ytimg.com/vi/QsYre__-aro/maxresdefault.jpg',
    },
    {
      title: 'Abdominal Crunch',
      muscleGroup: 'Abs',
      videoLink: 'https://www.youtube.com/watch?v=YtJZcoaMHsY',
      image: 'https://i.ytimg.com/vi/YtJZcoaMHsY/maxresdefault.jpg',
    },
  ];

  const filteredVideos = selectedMuscleGroups.length > 0
    ? videos.filter((video) => selectedMuscleGroups.includes(video.muscleGroup))
    : videos;

  return (
    <div>
      <h1 className="nutrition-title">Training Page</h1>
      <div className="training-container">
        <div className="training-splits">
          <div className="card5">
            <div className="search-title">
              Training Splits
            </div>
            <div className="card-content">
            <ul style={{ listStyleType: 'none', paddingLeft: '0', marginTop: '1em' }}>
  <li>
    <strong>Bulking:</strong>
    <ul style={{ listStyleType: 'none', paddingLeft: '1em', marginTop: '0.5em' }}>
      <li>Chest:
        <ul style={{ listStyleType: 'none', marginTop: '0.5em' }}>
          <li>Dumbbell Press - 4 sets of 12 reps</li>
          <li>Incline Bench Press - 4 sets of 12 reps</li>
          <li>Cable Flyes - 4 sets of 12 reps</li>
        </ul>
      </li>
      <li>Shoulders:
        <ul style={{ listStyleType: 'none', marginTop: '0.5em' }}>
          <li>Shoulder Press - 4 sets of 12 reps</li>
          <li>Arnold Press - 4 sets of 12 reps</li>
          <li>Lateral Raises - 4 sets of 12 reps</li>
        </ul>
      </li>
      <li>Biceps:
        <ul style={{ listStyleType: 'none', marginTop: '0.5em' }}>
          <li>Barbell Curls - 4 sets of 12 reps</li>
          <li>Hammer Curls - 4 sets of 12 reps</li>
          <li>Preacher Curls - 4 sets of 12 reps</li>
        </ul>
      </li>
      <li>Triceps:
        <ul style={{ listStyleType: 'none', marginTop: '0.5em' }}>
          <li>Tricep Dips - 4 sets of 12 reps</li>
          <li>Skull Crushers - 4 sets of 12 reps</li>
          <li>Cable Pushdowns - 4 sets of 12 reps</li>
        </ul>
      </li>
      <li>Quads:
        <ul style={{ listStyleType: 'none', marginTop: '0.5em' }}>
          <li>Squats - 4 sets of 12 reps</li>
          <li>Leg Press - 4 sets of 12 reps</li>
          <li>Lunges - 4 sets of 12 reps</li>
        </ul>
      </li>
      <li>Calves:
        <ul style={{ listStyleType: 'none', marginTop: '0.5em' }}>
          <li>Standing Calf Raises - 4 sets of 12 reps</li>
          <li>Seated Calf Raises - 4 sets of 12 reps</li>
          <li>Donkey Calf Raises - 4 sets of 12 reps</li>
        </ul>
      </li>
      <li>Hamstrings:
        <ul style={{ listStyleType: 'none', marginTop: '0.5em' }}>
          <li>Deadlifts - 4 sets of 12 reps</li>
          <li>Hamstring Curls - 4 sets of 12 reps</li>
          <li>Good Mornings - 4 sets of 12 reps</li>
        </ul>
      </li>
      <li>Back:
        <ul style={{ listStyleType: 'none', marginTop: '0.5em' }}>
          <li>Deadlifts - 4 sets of 12 reps</li>
          <li>Pull-ups - 4 sets of 12 reps</li>
          <li>Barbell Rows - 4 sets of 12 reps</li>
        </ul>
      </li>
      <li>Abs:
        <ul style={{ listStyleType: 'none', marginTop: '0.5em' }}>
          <li>Crunches - 4 sets of 12 reps</li>
          <li>Plank - 4 sets of 30 seconds</li>
          <li>Russian Twists - 4 sets of 12 reps</li>
        </ul>
      </li>
    </ul>
  </li>
  <li>
    <strong>Cutting:</strong>
    <ul style={{ listStyleType: 'none', paddingLeft: '1em', marginTop: '0.5em' }}>
      <li>Chest:
        <ul style={{ listStyleType: 'none', marginTop: '0.5em' }}>
          <li>Push-ups - 4 sets of 10 reps</li>
          <li>Dumbbell Pullover - 4 sets of 12 reps</li>
          <li>Cable Crossovers - 4 sets of 12 reps</li>
        </ul>
      </li>
      <li>Shoulders:
        <ul style={{ listStyleType: 'none', marginTop: '0.5em' }}>
          <li>Front Raises - 4 sets of 12 reps</li>
          <li>Bent-Over Reverse Flyes - 4 sets of 12 reps</li>
          <li>Face Pulls - 4 sets of 12 reps</li>
        </ul>
      </li>
      <li>Biceps:
        <ul style={{ listStyleType: 'none', marginTop: '0.5em' }}>
          <li>Hammer Curls - 4 sets of 12 reps</li>
          <li>Concentration Curls - 4 sets of 12 reps</li>
          <li>Spider Curls - 4 sets of 12 reps</li>
        </ul>
      </li>
      <li>Triceps:
        <ul style={{ listStyleType: 'none', marginTop: '0.5em' }}>
          <li>Diamond Push-ups - 4 sets of 10 reps</li>
          <li>Tricep Kickbacks - 4 sets of 12 reps</li>
          <li>Overhead Tricep Extension - 4 sets of 12 reps</li>
        </ul>
      </li>
      <li>Quads:
        <ul style={{ listStyleType: 'none', marginTop: '0.5em' }}>
          <li>Bodyweight Squats - 4 sets of 12 reps</li>
          <li>Lunges - 4 sets of 12 reps</li>
          <li>Step-ups - 4 sets of 12 reps</li>
        </ul>
      </li>
      <li>Calves:
        <ul style={{ listStyleType: 'none', marginTop: '0.5em' }}>
          <li>Standing Calf Raises - 4 sets of 12 reps</li>
          <li>Seated Calf Raises - 4 sets of 12 reps</li>
          <li>Donkey Calf Raises - 4 sets of 12 reps</li>
        </ul>
      </li>
      <li>Hamstrings:
        <ul style={{ listStyleType: 'none', marginTop: '0.5em' }}>
          <li>Romanian Deadlifts - 4 sets of 12 reps</li>
          <li>Hamstring Curls - 4 sets of 12 reps</li>
          <li>Glute-Ham Raises - 4 sets of 12 reps</li>
        </ul>
      </li>
      <li>Back:
        <ul style={{ listStyleType: 'none', marginTop: '0.5em' }}>
          <li>Lat Pulldowns - 4 sets of 12 reps</li>
          <li>Single-Arm Dumbbell Rows - 4 sets of 12 reps</li>
          <li>T-Bar Rows - 4 sets of 12 reps</li>
        </ul>
      </li>
      <li>Abs:
        <ul style={{ listStyleType: 'none', marginTop: '0.5em' }}>
          <li>Mountain Climbers - 4 sets of 12 reps</li>
          <li>Reverse Crunches - 4 sets of 12 reps</li>
          <li>Hanging Leg Raises - 4 sets of 12 reps</li>
        </ul>
      </li>
    </ul>
  </li>
  <li>
    <strong>Maintenance:</strong>
    <ul style={{ listStyleType: 'none', paddingLeft: '1em', marginTop: '0.5em' }}>
      <li>Chest:
        <ul style={{ listStyleType: 'none', marginTop: '0.5em' }}>
          <li>Bench Press - 4 sets of 8 reps</li>
          <li>Dumbbell Flyes - 4 sets of 10 reps</li>
          <li>Push-ups - 4 sets of 12 reps</li>
        </ul>
      </li>
      <li>Shoulders:
        <ul style={{ listStyleType: 'none', marginTop: '0.5em' }}>
          <li>Military Press - 4 sets of 8 reps</li>
          <li>Upright Rows - 4 sets of 10 reps</li>
          <li>Front Raises - 4 sets of 12 reps</li>
        </ul>
      </li>
      <li>Biceps:
        <ul style={{ listStyleType: 'none', marginTop: '0.5em' }}>
          <li>Barbell Curls - 4 sets of 8 reps</li>
          <li>Dumbbell Hammer Curls - 4 sets of 10 reps</li>
          <li>Preacher Curls - 4 sets of 12 reps</li>
        </ul>
      </li>
      <li>Triceps:
        <ul style={{ listStyleType: 'none', marginTop: '0.5em' }}>
          <li>Dips - 4 sets of 8 reps</li>
          <li>Close Grip Bench Press - 4 sets of 10 reps</li>
          <li>Tricep Pushdowns - 4 sets of 12 reps</li>
        </ul>
      </li>
      <li>Quads:
        <ul style={{ listStyleType: 'none', marginTop: '0.5em' }}>
          <li>Barbell Squats - 4 sets of 8 reps</li>
          <li>Leg Press - 4 sets of 10 reps</li>
          <li>Hack Squats - 4 sets of 12 reps</li>
        </ul>
      </li>
      <li>Calves:
        <ul style={{ listStyleType: 'none', marginTop: '0.5em' }}>
          <li>Standing Calf Raises - 4 sets of 8 reps</li>
          <li>Seated Calf Raises - 4 sets of 10 reps</li>
          <li>Donkey Calf Raises - 4 sets of 12 reps</li>
        </ul>
      </li>
      <li>Hamstrings:
        <ul style={{ listStyleType: 'none', marginTop: '0.5em' }}>
          <li>Romanian Deadlifts - 4 sets of 8 reps</li>
          <li>Leg Curls - 4 sets of 10 reps</li>
          <li>Glute-Ham Raises - 4 sets of 12 reps</li>
        </ul>
      </li>
      <li>Back:
        <ul style={{ listStyleType: 'none', marginTop: '0.5em' }}>
          <li>Deadlifts - 4 sets of 8 reps</li>
          <li>Wide Grip Pull-ups - 4 sets of 10 reps</li>
          <li>Seated Cable Rows - 4 sets of 12 reps</li>
        </ul>
      </li>
      <li>Abs:
        <ul style={{ listStyleType: 'none', marginTop: '0.5em' }}>
          <li>Weighted Sit-ups - 4 sets of 8 reps</li>
          <li>Russian Twists - 4 sets of 10 reps</li>
          <li>Plank - 4 sets of 30 seconds</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>


            </div>
          </div>
        </div>
        <TrainingSearch muscleGroups={muscleGroups} onChange={handleMuscleGroupChange} selectedMuscleGroups={selectedMuscleGroups} />
        <div className="filtered-videos">
          <h2>Matching Videos:</h2>
          <div className="card-container2">
            {filteredVideos.length > 0 ? (
              filteredVideos.map((video) => <VideoCard key={video.title} video={video} />)
            ) : (
              <p>No matching videos found.</p>
            )}
          </div>
        </div>
      </div>
      <GoogleFormButton />
    </div>
    
  );
};

export default TrainingPage;
