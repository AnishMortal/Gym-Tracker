// import axios from "axios";

// const API = axios.create({
//   baseURL: "http://localhost:8080/api/",
// });

// export const UserSignUp = async (data) => API.post("/user/signup", data);
// export const UserSignIn = async (data) => API.post("/user/signin", data);

// export const getDashboardDetails = async (token) =>
//   API.get("/user/dashboard", {
//     headers: { Authorization: `Bearer ${token}` },
//   });

// export const getWorkouts = async (token, date) =>
//   await API.get(`/user/workout${date}`, {
//     headers: { Authorization: `Bearer ${token}` },
//   });

// export const addWorkout = async (token, data) =>
//   await API.post(`/user/workout`, data, {
//     headers: { Authorization: `Bearer ${token}`},
// });

import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api/",
});

// User Authentication
export const UserSignUp = async (data) => API.post("/user/signup", data);
export const UserSignIn = async (data) => API.post("/user/signin", data);

// Fetch Dashboard Details
export const getDashboardDetails = async (token) =>
  API.get("/user/dashboard", {
    headers: { Authorization: `Bearer ${token}` },
  });

// Fetch Workouts
export const getWorkouts = async (token, date) =>
  await API.get(`/user/workout${date}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

// Add New Workout
export const addWorkout = async (token, data) =>
  await API.post(`/user/workout`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });

// Update Existing Workout
export const updateWorkout = async (token, workoutId, updatedData) =>
  await API.put(`/user/workout/${workoutId}`, updatedData, {
    headers: { Authorization: `Bearer ${token}` },
  });

// Delete Existing Workout
export const deleteWorkout = async (token, workoutId) =>
  await API.delete(`/user/workout/${workoutId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
