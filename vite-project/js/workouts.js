const workouts = [
  {
    name: "Shoulder Press",
    image: "shoulder_press_image.jpg",
    equipment: "dumbbell",
    muscleGroup: ["shoulder", "chest"],
    difficulty: "easy",
  },
  {
    name: "Push-ups",
    image: "pushups_image.jpg",
    equipment: "bodyweight",
    muscleGroup: ["chest", "triceps"],
    difficulty: "easy",
  },
  {
    name: "Bicep Curls",
    image: "bicep_curls_image.jpg",
    equipment: "dumbbell",
    muscleGroup: ["biceps"],
    difficulty: "easy",
  },
  {
    name: "Tricep Extensions",
    image: "tricep_extensions_image.jpg",
    equipment: "dumbbell",
    muscleGroup: ["triceps"],
    difficulty: "easy",
  },
  {
    name: "Dumbbell Rows",
    image: "dumbbell_rows_image.jpg",
    equipment: "dumbbell",
    muscleGroup: ["back"],
    difficulty: "moderate",
  },
  {
    name: "Dumbbell Lunges",
    image: "dumbbell_lunges_image.jpg",
    equipment: "dumbbell",
    muscleGroup: ["legs", "glutes"],
    difficulty: "moderate",
  },
  {
    name: "Dumbbell Bench Press",
    image: "dumbbell_bench_press_image.jpg",
    equipment: "dumbbell",
    muscleGroup: ["chest", "triceps"],
    difficulty: "moderate",
  },
  {
    name: "Dumbbell Lateral Raises",
    image: "dumbbell_lateral_raises_image.jpg",
    equipment: "dumbbell",
    muscleGroup: ["shoulder"],
    difficulty: "moderate",
  },
  {
    name: "Squats",
    image: "squats_image.jpg",
    equipment: "bodyweight",
    muscleGroup: ["legs", "glutes"],
    difficulty: "easy",
  },
  {
    name: "Lunges",
    image: "lunges_image.jpg",
    equipment: "bodyweight",
    muscleGroup: ["legs", "glutes"],
    difficulty: "moderate",
  },
  {
    name: "Wall-Sits",
    image: "wallsits_image.jpg",
    equipment: "bodyweight",
    muscleGroup: ["legs", "glutes"],
    difficulty: "moderate"
  },
  {
    name: "Pull-ups",
    image: "pullups_image.jpg",
    equipment: "bodyweight",
    muscleGroup: ["back", "biceps"],
    difficulty: "moderate",
  },
  {
    name: "Dips",
    image: "dips_image.jpg",
    equipment: "bodyweight",
    muscleGroup: ["triceps", "chest"],
    difficulty: "moderate",
  },
  {
    name: "Mountain Climbers",
    image: "mountain_climbers_image.jpg",
    equipment: "bodyweight",
    muscleGroup: ["core", "cardio"],
    difficulty: "moderate",
  },
  {
    name: "Russian Twists",
    image: "russian_twists_image.jpg",
    equipment: "bodyweight",
    muscleGroup: ["obliques", "core"],
    difficulty: "moderate",
  },
  {
    name: "Pistol Squats",
    image: "pistol_squats_image.jpg",
    equipment: "bodyweight",
    muscleGroup: ["legs"],
    difficulty: "hard",
  },
];

export { workouts };

// rerank difficulty of workouts and get difficult ones