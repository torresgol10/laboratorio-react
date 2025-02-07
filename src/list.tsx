import React, { useState } from "react";
import { Link } from "react-router-dom";
import useDebounce from "./hooks/useDebounce";
import { useStore } from "./hooks/useStore";

interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

export const ListPage: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const { searchStore, updateSearchStore } = useStore()

  const [search, setSearch ] = useState(searchStore)

  const debouncedSearch = useDebounce(search, 800)

  React.useEffect(() => {
    fetch(`https://api.github.com/orgs/${debouncedSearch}/members`)
      .then((response) => response.json())
      .then((json) => setMembers(json));
      updateSearchStore(debouncedSearch)
  }, [debouncedSearch]);

  return (
    <>
      <h2>Hello from List page</h2>+{" "}
      <form>
        <input type="text" defaultValue={search} value={search} onChange={(e) => setSearch(e.target.value)} />
      </form>
      <div className="list-user-list-container">
        <span className="list-header">Avatar</span>
        <span className="list-header">Id</span>
        <span className="list-header">Name</span>
        {members.length > 0 && members.map((member) => (
          <>
            <img src={member.avatar_url} />
            <span>{member.id}</span>
            <Link to={`/detail/${member.id}`}>{member.login}</Link>
          </>
        ))}
      </div>
      <Link to="/detail">Navigate to detail page</Link>
    </>
  );
};
