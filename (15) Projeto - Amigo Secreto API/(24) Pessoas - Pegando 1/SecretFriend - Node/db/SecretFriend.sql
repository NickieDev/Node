--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5
-- Dumped by pg_dump version 14.5

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Event; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Event" (
    id integer NOT NULL,
    status boolean DEFAULT false NOT NULL,
    title text NOT NULL,
    description text NOT NULL,
    grouped boolean DEFAULT false NOT NULL
);


ALTER TABLE public."Event" OWNER TO postgres;

--
-- Name: EventGroup; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."EventGroup" (
    id integer NOT NULL,
    id_event integer NOT NULL,
    name text NOT NULL
);


ALTER TABLE public."EventGroup" OWNER TO postgres;

--
-- Name: EventGroup_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."EventGroup_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."EventGroup_id_seq" OWNER TO postgres;

--
-- Name: EventGroup_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."EventGroup_id_seq" OWNED BY public."EventGroup".id;


--
-- Name: EventPeople; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."EventPeople" (
    id integer NOT NULL,
    id_event integer NOT NULL,
    id_group integer NOT NULL,
    name text NOT NULL,
    cpf text NOT NULL,
    matched text DEFAULT ''::text NOT NULL
);


ALTER TABLE public."EventPeople" OWNER TO postgres;

--
-- Name: EventPeople_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."EventPeople_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."EventPeople_id_seq" OWNER TO postgres;

--
-- Name: EventPeople_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."EventPeople_id_seq" OWNED BY public."EventPeople".id;


--
-- Name: Event_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Event_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Event_id_seq" OWNER TO postgres;

--
-- Name: Event_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Event_id_seq" OWNED BY public."Event".id;


--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO postgres;

--
-- Name: Event id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Event" ALTER COLUMN id SET DEFAULT nextval('public."Event_id_seq"'::regclass);


--
-- Name: EventGroup id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."EventGroup" ALTER COLUMN id SET DEFAULT nextval('public."EventGroup_id_seq"'::regclass);


--
-- Name: EventPeople id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."EventPeople" ALTER COLUMN id SET DEFAULT nextval('public."EventPeople_id_seq"'::regclass);


--
-- Data for Name: Event; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Event" (id, status, title, description, grouped) FROM stdin;
1	f	Test	Test	f
4	f	Test4	Test4	f
\.


--
-- Data for Name: EventGroup; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."EventGroup" (id, id_event, name) FROM stdin;
1	1	Fake
\.


--
-- Data for Name: EventPeople; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."EventPeople" (id, id_event, id_group, name, cpf, matched) FROM stdin;
1	1	1	Nick	123	
\.


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
da778746-ea26-4da3-a708-98f200220480	f51869e6da8266b4cb4e50f47dc7fa77054e6b2262d6d8ca79d6e83f41f2a53f	2023-12-06 16:18:23.394046-03	20231206191822_init	\N	\N	2023-12-06 16:18:22.555336-03	1
\.


--
-- Name: EventGroup_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."EventGroup_id_seq"', 10, true);


--
-- Name: EventPeople_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."EventPeople_id_seq"', 1, true);


--
-- Name: Event_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Event_id_seq"', 4, true);


--
-- Name: EventGroup EventGroup_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."EventGroup"
    ADD CONSTRAINT "EventGroup_pkey" PRIMARY KEY (id);


--
-- Name: EventPeople EventPeople_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."EventPeople"
    ADD CONSTRAINT "EventPeople_pkey" PRIMARY KEY (id);


--
-- Name: Event Event_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Event"
    ADD CONSTRAINT "Event_pkey" PRIMARY KEY (id);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: EventGroup EventGroup_id_event_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."EventGroup"
    ADD CONSTRAINT "EventGroup_id_event_fkey" FOREIGN KEY (id_event) REFERENCES public."Event"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: EventPeople EventPeople_id_event_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."EventPeople"
    ADD CONSTRAINT "EventPeople_id_event_fkey" FOREIGN KEY (id_event) REFERENCES public."Event"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: EventPeople EventPeople_id_group_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."EventPeople"
    ADD CONSTRAINT "EventPeople_id_group_fkey" FOREIGN KEY (id_group) REFERENCES public."EventGroup"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- PostgreSQL database dump complete
--

