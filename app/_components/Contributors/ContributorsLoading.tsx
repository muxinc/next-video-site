export default async function ContributorsLoading() {
  return (
    <ul className="flex flex-wrap items-center justify-center md:justify-start">
      <li className="w-48 h-48 animate-pulse rounded-full bg-gray-23" style={{ animationDelay: '0.0s' }} />
      <li className="w-48 h-48 animate-pulse rounded-full bg-gray-23" style={{ animationDelay: '0.1s' }} />
      <li className="w-48 h-48 animate-pulse rounded-full bg-gray-23" style={{ animationDelay: '0.2s' }} />
      <li className="w-48 h-48 animate-pulse rounded-full bg-gray-23" style={{ animationDelay: '0.3s' }} />
      <li className="w-48 h-48 animate-pulse rounded-full bg-gray-23" style={{ animationDelay: '0.4s' }} />
      <li className="w-48 h-48 animate-pulse rounded-full bg-gray-23" style={{ animationDelay: '0.5s' }} />
    </ul>
  );
}
