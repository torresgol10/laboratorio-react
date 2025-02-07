import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

interface MemberDetailEntity {
  id: string;
  login: string;
  name: string;
  company: string;
  bio: string;
  avatar_url: string;
  location: string;
  updated_at: string;
}

const createDefaultMemberDetail = () => ({
  id: '',
  login: '',
  name: '',
  company: '',
  bio: '',
  avatar_url: '',
  location: '',
  updated_at: ''
})


export const DetailPage: React.FC = () => {
  const { id } = useParams();
  const [user, setUser] = useState<MemberDetailEntity>(createDefaultMemberDetail());

  useEffect(() => {
    fetch(`https://api.github.com/user/${id}`)
      .then((response) => response.json())
      .then((json) => setUser(json));
  }, [])

  return (
    <>
      <h2>Hello from Detail page</h2>
      <img src={user?.avatar_url} width={200} height={200} />
      <h3>User Id: {id}</h3>
      <h3>Name: {user?.name}</h3>
      <h3>Location: {user?.location}</h3>
      <h3>Company: {user?.company}</h3>
      <h3>Updated at: {user?.updated_at}</h3>
      <Link to="/list">Back to list page</Link>
    </>
  );
};
