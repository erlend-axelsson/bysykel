export async function get(path: string) {
    const response = await fetch(path);
    return await response.json();
}
