-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cellphone" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "schedules" (
    "id" TEXT NOT NULL,
    "barberName" TEXT NOT NULL,
    "date" TEXT NOT NULL,

    CONSTRAINT "schedules_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Group" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Group_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GroupUsers" (
    "id" TEXT NOT NULL,
    "id_user" TEXT NOT NULL,
    "id_group" TEXT NOT NULL,

    CONSTRAINT "GroupUsers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ScheduleUsers" (
    "id" TEXT NOT NULL,
    "id_user" TEXT NOT NULL,
    "id_schedule" TEXT NOT NULL,

    CONSTRAINT "ScheduleUsers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "GroupUsers" ADD CONSTRAINT "GroupUsers_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GroupUsers" ADD CONSTRAINT "GroupUsers_id_group_fkey" FOREIGN KEY ("id_group") REFERENCES "Group"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ScheduleUsers" ADD CONSTRAINT "ScheduleUsers_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ScheduleUsers" ADD CONSTRAINT "ScheduleUsers_id_schedule_fkey" FOREIGN KEY ("id_schedule") REFERENCES "schedules"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
