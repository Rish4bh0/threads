import UserHeader from "../components/UserHeader"
import UserPost from "../components/UserPost"
const UserPage = () => {
  return (
    <>
    <UserHeader/>
    <UserPost likes={1200} replies={481} postImg="/post1.png" postTitle="Lets talk"/>
    <UserPost likes={4300} replies={451} postImg="/post2.png" postTitle="Lets talk 1"/>
    <UserPost likes={100} replies={321} postImg="/post3.png" postTitle="Lets talk 2"/>
    <UserPost likes={500} replies={21} postTitle="My firt thread"/>
        </>
  )
}

export default UserPage