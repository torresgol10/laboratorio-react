import React, { useState } from "react";
import { Link } from "react-router-dom";
import useDebounce from "./hooks/useDebounce";
import { useStore } from "./hooks/useStore";
import { getOrgsBySearch } from "./services/getOrgsBySearch";
import HeaderTable from "./HeaderTable";
import RowTable from "./RowTable";

interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

export const ListPage: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const { searchStore, updateSearchStore } = useStore()

  const [search, setSearch] = useState(searchStore)

  const debouncedSearch = useDebounce(search, 800)

  React.useEffect(() => {
    getOrgsBySearch({ debouncedSearch }).then((json) => setMembers(json));
    updateSearchStore(debouncedSearch)
  }, [debouncedSearch]);

  return (
    <>
      <h2>Hello from List page</h2>+{" "}
      <form>
        <input type="text" defaultValue={search} value={search} onChange={(e) => setSearch(e.target.value)} />
      </form>
      <div className="list-user-list-container">
        <HeaderTable />
        {members.length > 0 && members.map((member) => (
          <RowTable key={member.id} member={member} />
        ))}
      </div>
      <Link to="/detail">Navigate to detail page</Link>
    </>
  );
};
