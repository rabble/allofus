export function deduplicateOrganizations<T extends { id: string }>(organizations: T[]): T[] {
  const seen = new Set<string>();
  return organizations.filter(org => {
    if (seen.has(org.id)) {
      return false;
    }
    seen.add(org.id);
    return true;
  });
}