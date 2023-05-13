import Label from "components/Label";
import { AiFillLike, AiFillDislike } from "react-icons/ai";

export default function User({
  user,
  distance,
  s_number,
  likeUser = () => {},
  passUser = () => {},
}) {
  return (
    <div className="border-2">
      <div className="p-2 flex gap-2">
        <AiFillLike
          size="2rem"
          className="mr-2 cursor-pointer"
          onClick={() => likeUser(s_number, user._id)}
        />
        <AiFillDislike
          size="2rem"
          className="mr-2 cursor-pointer"
          onClick={() => passUser(s_number, user._id)}
        />
      </div>
      <div>
        <Label>user id :</Label>
        {user._id}
      </div>
      <div>
        <Label>bio :</Label>
        {user.bio}
      </div>
      <div>
        <Label>name :</Label>
        {user.name}
      </div>
      <div>
        <Label>distance :</Label>
        {distance}
      </div>

      <div>
        <Label>photo :</Label>
        <a href="#">{user.url}</a>
        <img
          className="w-36 h-36 "
          src={user.photos[0].processedFiles[0].url}
          alt=""
        />
      </div>
      <div>
        <Label>badges :</Label>

        {user.badges.map((badge, key) => (
          <p key={key}>{badge.type}</p>
        ))}
      </div>
    </div>
  );
}
