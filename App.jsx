import { useEffect, useState } from "react";
import { supabase } from "./lib/supabase";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white p-10">
      <h1 className="text-4xl font-bold">تطبيق فين</h1>
      {user ? (
        <p className="mt-4">أهلاً بيك 🔥</p>
      ) : (
        <p className="mt-4">المشروع جاهز للربط مع Supabase</p>
      )}
    </div>
  );
}
