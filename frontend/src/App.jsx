import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import NotFound from "./pages/NotFoundPage";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import AuthLayout from "./components/AuthLayout";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

export default function App() {
  const { authUser } = useAuthContext();
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route
          index
          element={authUser ? <MainPage /> : <Navigate to="/login" />}
        />
        <Route element={authUser ? <Navigate to="/" /> : <AuthLayout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return (
    <div>
      <RouterProvider router={route} />
      <Toaster />
    </div>
  );
}
