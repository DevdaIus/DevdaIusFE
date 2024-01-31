import { Outlet, useNavigation } from "react-router-dom";

function Root() {
  const navigation = useNavigation();
  return (
    <>
      {navigation.state === 'loading' && <p>Loading...</p>}
      <Outlet />
    </>
  )
}

export default Root;