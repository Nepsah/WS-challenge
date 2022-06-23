import { GroupList } from "../components/lists/GroupList";
import { useFetch } from "../hooks/useFetch";

export function Home() {
  return (
    <>
      <div>
        <GroupList />
      </div>
    </>
  );
}
