"use client"; 
export default function error({ error }: { error: Error }) {
    console.log(error);
  return <div>error</div>;
}
