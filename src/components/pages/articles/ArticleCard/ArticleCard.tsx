import { format } from "date-fns";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";
import type { ArticleType } from "src/types";
import { Badge } from "src/components/Badge";
import { useRevealImage } from "src/hooks/useRevealImage";

type Props = Omit<ArticleType, "author" | "body" | "meta">;

/** @package */
export const ArticleCard: FC<Props> = ({
  categories,
  coverImage,
  title,
  _id,
  _sys,
}) => {
  const { ref, variants, control } = useRevealImage();

  return (
    <Link href={`/articles/${_id}`}>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={control}
        variants={variants}
        className="mb-5 rounded-md bg-gray-50 shadow-md"
      >
        <div className="relative h-52 w-full overflow-hidden rounded-t-md xl:h-64">
          <Image
            src={coverImage.src}
            alt={coverImage.fileName}
            fill
            priority
            sizes="(max-width: 768px) 100vw,
              (max-width: 1280px) 50vw,
              33vw"
            className="object-cover transition duration-300 hover:scale-110"
          />
        </div>
        <div className="p-3">
          <div className="mb-2 flex items-center space-x-4 text-gray-400">
            <Badge text={categories[0].category} />
            <span className="text-xs xl:text-sm">
              {format(new Date(_sys.createdAt), "yyyy年MM月dd日")}
            </span>
          </div>
          <p className="text-base">{title}</p>
        </div>
      </motion.div>
    </Link>
  );
};
