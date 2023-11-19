export const returnMockPosts = () => {
  const mockPosts = [
    {
      id: 1,
      username: "gking",
      displayName: "Greg King",
      timeSincePost: "10m",
      postText: "This is some test text for a recommendation post.",
      labels: ["Metal", "Jazz"],
      artist: "Animals as Leaders",
      album: "Parrhesia",
      song: "Red Miso",
      avatarUrl: "https://i.pravatar.cc/300",
    },
    {
      id: 2,
      username: "nkserikzhan",
      displayName: "Kymbat Nuranova",
      timeSincePost: "34m",
      postText:
        "Another set of text test for a post recommending some music. I like the instruments in this song and it has good vocals.",
      labels: ["Hip Hop", "R&B"],
      artist: "Hiatus Kaiyote",
      album: "Choose Your Weapon",
      song: "Molasses",
      avatarUrl: "https://i.pravatar.cc/300",
    },
    {
      id: 3,
      username: "testuser",
      displayName: "Test User",
      timeSincePost: "2hr",
      postText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porttitor elit et augue aliquam, non feugiat neque feugiat. Proin non sodales lacus. Aenean ornare eros lorem, sit amet bibendum tellus finibus sit amet. Duis pharetra est sem, non placerat magna volutpat in. Proin venenatis quam a leo elementum semper.",
      labels: ["Country"],
      artist: "Closure in Moscow",
      album: "Pink Lemonade",
      song: "Seeds of Gold",
      avatarUrl: "https://i.pravatar.cc/300",
    },
  ];

  return mockPosts;
};
