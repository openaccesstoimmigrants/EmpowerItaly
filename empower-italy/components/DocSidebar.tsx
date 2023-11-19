'use client'

import { useEffect, useState } from "react";
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

interface Doc {
  text: string;
}

export default function DocSidebar() {
  const [docText, setDocText] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [compiledSource, setCompiledSource] = useState<any>(null);

  useEffect(() => {
    const fetchDoc = async () => {
      try {
        const markdownResponse = await fetch('https://raw.githubusercontent.com/openaccesstoimmigrants/openaccesstoimmigrants/main/README.md', {mode: 'no-cors'});
        if (!markdownResponse.ok) {
          throw new Error("Network response was not ok.");
        }

        const markdownText: string = await markdownResponse.text();
        setDocText(markdownText);
        setLoading(false);

        const compiled = await serialize(markdownText);
        setCompiledSource(compiled);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("An error occurred while fetching data.");
        setLoading(false);
      }
    }

    fetchDoc();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!docText || !compiledSource) {
    return <p>No content available.</p>;
  }

  return (
    <section id="doc">
      <div>
        <MDXRemote {...compiledSource} />
      </div>
    </section>
  );
}
