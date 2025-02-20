interface MemberEntity {
    id: string;
    login: string;
    avatar_url: string;
}

export function getOrgsBySearch({ debouncedSearch }: { debouncedSearch: string }): Promise<MemberEntity[]> {
    return fetch(`https://api.github.com/orgs/${debouncedSearch}/members`)
        .then((response) => response.json())
}