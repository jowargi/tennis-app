import { getRacketMetadataById } from "@/services/getRacketMetadataById";
import { RacketMetadata } from "@/types/racketMetadata";
import { ImageResponse } from "next/og";
import { FC } from "react";

const RacketImage: FC<{ racketMetadata: RacketMetadata }> = ({
  racketMetadata,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <p style={{ fontSize: "1.5rem" }}>{racketMetadata.name}</p>
      <img
        src={racketMetadata.imageUrl}
        alt={racketMetadata.name}
        style={{
          display: "block",
          width: "300px",
          height: "300px",
          borderRadius: "5px",
        }}
      />
    </div>
  );
};

const RacketOGImage = async ({ params }: PageProps<"/racket/[racketId]">) => {
  const { racketId } = await params;

  const { data: racketMetadata } = await getRacketMetadataById(+racketId);

  if (!racketMetadata) return null;

  return new ImageResponse(<RacketImage racketMetadata={racketMetadata} />, {
    width: 1200,
    height: 630,
  });
};

export default RacketOGImage;
