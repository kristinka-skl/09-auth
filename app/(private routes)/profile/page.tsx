import { Metadata } from "next";
import ProfileClientPage from "./ProfileClient";
import { getServerMe } from "@/lib/api/serverApi";

export const metadata: Metadata = {
  title: "NoteHub Profile",
  description: "User profile page for NoteHub application",
  openGraph: {
    title: "Profile",
    description: "User profile page for NoteHub application",
    url: `https://notehub.com/profile`,
    siteName: "NoteHub Profile",
    images: [
      {
        url: "https://i.ibb.co/hRmh19Gt/Note-Hub-green.png",
        width: 1200,
        height: 630,
        alt: "NoteHub Profile",
      },
    ],
    type: "article",
  },
};
export default async function Profile() {
  const user = await getServerMe();
  return <ProfileClientPage user={user} />;
}
