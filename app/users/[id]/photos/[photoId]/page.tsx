import React from "react";

interface Props {
  params: { id: number; photoId: number };
}

const UserPhotoID = ({ params: { id, photoId } }: Props) => {
  return (
    <div>
      UserPhotoID {id} {photoId}
    </div>
  );
};

export default UserPhotoID;
