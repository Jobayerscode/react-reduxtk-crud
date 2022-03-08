import "./App.css";
import { useEffect, useLayoutEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addMember, deleteMember, updateMemberImg } from "./redux/Members";

function App() {
  const dispatch = useDispatch();
  const memberList = useSelector((state) => state.members.value);

  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [newImg, setNewImg] = useState("");

  return (
    <div className="center">
      {" "}
      <div className="card">
        <div>
          <input
            type="text"
            placeholder="Name..."
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Img Url..."
            onChange={(event) => {
              setImg(event.target.value);
            }}
          />
        </div>
        <div></div>

        <button
          className="btn_create"
          onClick={() => {
            dispatch(
              addMember({
                id: memberList[memberList.length - 1].id + 1,
                name,
                img,
              })
            );
          }}
        >
          {" "}
          Add Member
        </button>
      </div>
      <div className="displayMembers">
        {memberList.map((member) => {
          return (
            <div key={member.id} className="card">
              <div>
                <img
                  src={member.img}
                  width="400"
                  height="400"
                  loading="lazy"
                  alt="profile picture"
                />
              </div>
              <div className="container">
                <h2> {member.name}</h2>

                <div>
                  <input
                    type="text"
                    placeholder="New Img Url..."
                    onChange={(event) => {
                      setNewImg(event.target.value);
                    }}
                  />
                  <button
                    className="btn_update"
                    onClick={() => {
                      dispatch(
                        updateMemberImg({
                          id: member.id,
                          img: newImg,
                        })
                      );
                    }}
                  >
                    {" "}
                    Update Image Url
                  </button>
                </div>
                <div>
                  <button
                    className="btn_delete"
                    onClick={() => {
                      dispatch(deleteMember({ id: member.id }));
                    }}
                  >
                    Delete Member
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
