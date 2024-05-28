yarn run v1.22.19
$ /home/abdiel/Documentos/WebProjects/CodeZero/dev-engenharias-page/node_modules/.bin/nlx prisma migrate diff --from-empty --to-schema-datamodel prisma/schema.prisma --script
-- CreateTable
CREATE TABLE "project_cards" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "published_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "link" TEXT NOT NULL,
    "technologiesUsed" TEXT[],
    "description" TEXT,

    CONSTRAINT "project_cards_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "project_cards_title_key" ON "project_cards"("title");

Done in 6.19s.
