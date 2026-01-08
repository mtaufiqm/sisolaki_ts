CREATE TABLE "penilaiancc" (
  "uuid" text PRIMARY KEY,
  "desc" text,
  "tahun" int UNIQUE NOT NULL,
  "status" int NOT NULL,
  "created_at" timestamp,
  "last_updated" timestamp
);

CREATE TABLE "candidatecc" (
  "uuid" text PRIMARY KEY,
  "pegawai" text NOT NULL,
  "penilaiancc" text NOT NULL,
  "score" double precision NOT NULL DEFAULT 0,
  "kjk" double precision NOT NULL DEFAULT 0,
  "skp" double precision NOT NULL DEFAULT 0,
  "created_at" timestamp,
  "last_updated" timestamp
);

CREATE TABLE "penilaicc" (
  "uuid" text PRIMARY KEY,
  "pegawai" text NOT NULL,
  "penilaiancc" text NOT NULL
);

CREATE TABLE "penilaiancc_questions" (
  "uuid" text PRIMARY KEY,
  "title" text NOT NULL,
  "desc" text NOT NULL,
  "order" integer NOT NULL,
  "tag" text,
  "is_active" boolean NOT NULL
);

CREATE TABLE "penilaiancc_answers" (
  "uuid" text PRIMARY KEY,
  "penilaicc" text NOT NULL,
  "candidatecc" text NOT NULL,
  "question" text NOT NULL,
  "value" int NOT NULL DEFAULT 0,
  "created_at" timestamp,
  "last_updated" timestamp
);

ALTER TABLE "candidatecc" ADD FOREIGN KEY ("pegawai") REFERENCES "pegawai" ("username") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "candidatecc" ADD FOREIGN KEY ("penilaiancc") REFERENCES "penilaiancc" ("uuid");
ALTER TABLE "penilaicc" ADD FOREIGN KEY ("penilaiancc") REFERENCES "penilaiancc" ("uuid") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "penilaicc" ADD FOREIGN KEY ("pegawai") REFERENCES "pegawai" ("username") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "penilaiancc_answers" ADD FOREIGN KEY ("penilaicc") REFERENCES "penilaicc" ("uuid") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "penilaiancc_answers" ADD FOREIGN KEY ("question") REFERENCES "penilaiancc_questions" ("uuid") ON UPDATE CASCADE;
ALTER TABLE "penilaiancc_answers" ADD FOREIGN KEY ("candidatecc") REFERENCES "candidatecc" ("uuid") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "penilaiancc_answers" ADD UNIQUE (penilaicc,candidatecc,question)