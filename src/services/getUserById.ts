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
  

export function getUserById({ id }: { id: string }): Promise<MemberDetailEntity> {
    return fetch(`https://api.github.com/user/${id}`)
        .then((response) => response.json())
}