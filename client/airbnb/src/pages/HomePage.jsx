import Input from "../components/common/Input";

export default function HomePage() {
  <Input
    label="Password"
    type="password"
    placeholder="Enter password"
    error="Password is too short"
  />;
  return <h1>Home Page</h1>;
}
