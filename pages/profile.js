import React from "react";
import Head from "next/head";
import AppLayout from "../components/AppLayout";
import FollowList from "../components/FollowList";
import NicknameEditForm from "../components/NicknameEditForm";

const Profile = () => {
  const followingList = [
    { nickname: "페이커" },
    { nickname: "Zed" },
    { nickname: "빠새" },
  ];
  const followerList = [
    { nickname: "페이커" },
    { nickname: "Zed" },
    { nickname: "빠새" },
  ];
  return (
    <>
      <Head>
        <title>프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <div>profile</div>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워 목록" data={followerList} />
      </AppLayout>
    </>
  );
};

export default Profile;
