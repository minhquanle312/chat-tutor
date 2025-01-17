PGDMP                       }            chat-bot    17.2 (Debian 17.2-1.pgdg120+1)    17.0     C           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                           false            D           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                           false            E           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                           false            F           1262    16384    chat-bot    DATABASE     u   CREATE DATABASE "chat-bot" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_US.utf8';
    DROP DATABASE "chat-bot";
                     chat-postgres    false                        2615    16490    public    SCHEMA     2   -- *not* creating schema, since initdb creates it
 2   -- *not* dropping schema, since initdb creates it
                     chat-postgres    false            G           0    0    SCHEMA public    COMMENT         COMMENT ON SCHEMA public IS '';
                        chat-postgres    false    5            H           0    0    SCHEMA public    ACL     +   REVOKE USAGE ON SCHEMA public FROM PUBLIC;
                        chat-postgres    false    5            T           1247    16501    MessageSender    TYPE     F   CREATE TYPE public."MessageSender" AS ENUM (
    'bot',
    'user'
);
 "   DROP TYPE public."MessageSender";
       public               chat-postgres    false    5            W           1247    16506    MessageType    TYPE     S   CREATE TYPE public."MessageType" AS ENUM (
    'text',
    'video',
    'image'
);
     DROP TYPE public."MessageType";
       public               chat-postgres    false    5            �            1259    16491    _prisma_migrations    TABLE     �  CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);
 &   DROP TABLE public._prisma_migrations;
       public         heap r       chat-postgres    false    5            �            1259    16521    chat    TABLE     �   CREATE TABLE public.chat (
    id text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "userId" text,
    title text NOT NULL
);
    DROP TABLE public.chat;
       public         heap r       chat-postgres    false    5            �            1259    16529    message    TABLE     �  CREATE TABLE public.message (
    id text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    sender public."MessageSender" NOT NULL,
    content text NOT NULL,
    type public."MessageType" DEFAULT 'text'::public."MessageType" NOT NULL,
    "chatId" text NOT NULL,
    "videoId" text
);
    DROP TABLE public.message;
       public         heap r       chat-postgres    false    855    855    852    5            �            1259    16513    user    TABLE       CREATE TABLE public."user" (
    id text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    email text NOT NULL,
    name text NOT NULL,
    avatar text
);
    DROP TABLE public."user";
       public         heap r       chat-postgres    false    5            =          0    16491    _prisma_migrations 
   TABLE DATA           �   COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
    public               chat-postgres    false    217   �       ?          0    16521    chat 
   TABLE DATA           M   COPY public.chat (id, "createdAt", "updatedAt", "userId", title) FROM stdin;
    public               chat-postgres    false    219   �       @          0    16529    message 
   TABLE DATA           k   COPY public.message (id, "createdAt", "updatedAt", sender, content, type, "chatId", "videoId") FROM stdin;
    public               chat-postgres    false    220   R       >          0    16513    user 
   TABLE DATA           S   COPY public."user" (id, "createdAt", "updatedAt", email, name, avatar) FROM stdin;
    public               chat-postgres    false    218   �)       �           2606    16499 *   _prisma_migrations _prisma_migrations_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);
 T   ALTER TABLE ONLY public._prisma_migrations DROP CONSTRAINT _prisma_migrations_pkey;
       public                 chat-postgres    false    217            �           2606    16528    chat chat_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.chat
    ADD CONSTRAINT chat_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.chat DROP CONSTRAINT chat_pkey;
       public                 chat-postgres    false    219            �           2606    16537    message message_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.message
    ADD CONSTRAINT message_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.message DROP CONSTRAINT message_pkey;
       public                 chat-postgres    false    220            �           2606    16520    user user_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public."user" DROP CONSTRAINT user_pkey;
       public                 chat-postgres    false    218            �           1259    16538    user_email_key    INDEX     I   CREATE UNIQUE INDEX user_email_key ON public."user" USING btree (email);
 "   DROP INDEX public.user_email_key;
       public                 chat-postgres    false    218            �           2606    16820    chat chat_userId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.chat
    ADD CONSTRAINT "chat_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."user"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 A   ALTER TABLE ONLY public.chat DROP CONSTRAINT "chat_userId_fkey";
       public               chat-postgres    false    218    219    3237            �           2606    16825    message message_chatId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.message
    ADD CONSTRAINT "message_chatId_fkey" FOREIGN KEY ("chatId") REFERENCES public.chat(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 G   ALTER TABLE ONLY public.message DROP CONSTRAINT "message_chatId_fkey";
       public               chat-postgres    false    3239    220    219            =   �  x�u�]j0��wO���E?�%�=A`��.�	4K�_'KIR�'�1�͘r4���[�R�{�i���
�7�*�13g�EB"���Z��*�R�A�>1�a����HH
`A��g�s��~x]�# �����zx��2��T�U{��q��h�6�R��b>�����f�C�/M5�ʓ�l&hפ�t���7Ҙ:7A��6�X��T��w�i �s_�<����z����Rl}3�Q ���Y�Խ*�%qv���m���0w8x$D�m��'�R�����r\a��c��B�	Oܚ+~��7����ܿ��W�������H�������T�+U[�"�	/�Fu�a�;�� d'�E:uV�R��&^4������ݴ��BƵwo.��%X�1�?H�H������|Y�>Ҽ� Io4����v���      ?   �   x�mϱn�0���
� �E�[�.��-��HH�|[/�,7�p�dQ,5(�h�Z�A�[c*�J/# �:�8��z�#y�4�?�����˵�ƺ<��Q�ۺ��wQd�	T�P���ZO��,G��=f>�!�w�۵�w��AT�45V�tɒ��MH�T���+�r|��;�~ ��NS      @   Z
  x��Y�r�H}6_���J���	b���1l &b��n��Hj��߾Yj0 �cwf�wvIyt*�dfÅQ	�%R�2F�gѫ��;S�0A�X�2x�kշ�]"�.w�M�w쬹�uAv�x������͐r� �D@<�@���F����=��������>"!d������ջ�R�;p��Q���糶�-c1O�Oac�n���Q�8����Q\j���LK�wܼݩc��ϚX�z>-�e;X�	X�-E��lb���,�3Q*F�+J��B�%�=FJ2��pie��E��Я %wl-l!U��Ӽ.~�W&"�F.`����4���6�X�B���yyGU~+�*��4��jv�0��
�\!#�g��RɼvC`̔�����$g�^��8-�rZTM�T��dU��t�*2�(����qĆ�]-b��s5˦�We���F�)\���گK��o�z[��=ī�M5�[M����zW�Y���g��� ,l��qa�;��U��t�_۩��PT-,+�v_��o�WS�������6�����fsx�<x�����vYWP�e[�I3�M�]�����$����*�=� �V�LKl�K(W�~dg1t����b�XNl]5�$b$n��ukpa�N�^Ķ�?ۢ��6EV�/^��|a��^dЙ�)|7ɏ�ۆ،���X,ݤjrB4�����I\�M`����PW2?Y��v�� �:8�|�[��6�:ɐ		��ItJ1)�+�9�(��Ɋ�_�ע�W���2�d��!�.�%��Ҽ.%���(e9e?������L�T��|Q��8�n�F	i@@;� ��2��h��=�ȓ�4w�%�k�\g�W�sVPQ���s����0�d���"̬ڇ�m��y�%Y@O&UL���d���"[5D>l{~����s�H2[,*ȇ�~�Ry;)^XH\�~P9�%n�(����)hC�(�1.V�֐��Q>!i�eQ�(J��5�F�I�~�O�.�-��d�xjc!>[d��-��6� ��� ���c)!X�DL.z){�)��d�l��{���Ć�e���^��I� �	F� 7�c���G(Ȯ`%4a�«*D(1�����e��`נ� (+�1��0M���:�ѣKI7�;P'�y;oV3(M�l�� a7�� #�$0�p�����
�3�+T�y�7�/�ev�� t�r9La+�3}��[�4ߡb���d3W��Q�.��Bjf~1�T��~2_��Y[�b���� ���t��&��*>�/�r���~r��@��<Rm�o���Y��Z{t���k|������aŎ�(�8�z�����7~t"_�����G~�����&�n����������W''o��3wz�i9}~yA���}�w���ۖ��ټ�>|��������|����g2���u�y����6��݌��5���W-L:'���g7����>�Q���G���+_����Г���xz����	i}��|��>=��k���EػY�m��Nn�>>���w�Ǔ�}?nW�S�r�\~������������'O?��{�ٗ���d��o�XӼ�nQ�Źy6=~(���\�
�?:y����ѻwO?�]_���o�q�NlU�����aN�>#�d����2&(&R�u����pyHM�TΑ�h#�.�I�bR5��]ܣ�?[�X�h�����y'i�8�>r�5�(���A��4�K�^��J��#�4���L�>9�To��۰u�z=����Bmn���\�^*���5J>)�	���ȃ��������`�j�dl���%<Q�sO:e��v������D�B!�,Z��A_��3<1CD �o��5|m�]���8(�<�� ���p^�A�ޝ�`����6�!+(�%�#8��S�L@c�wߝ<H2�{k߼�[q��@�
��ܣ�L�>Q�� TO\R���A���l��^[a
�p�d�D�fE7c�;'��J�.!��t��n¶Ƥ`�l�} �ЄE)xb}�  ���:=�/������@=�dE&#4f:b�/P�@,���s�}C�mE��q�Fr�|^G�P�B_��%�����*� �� ��©-�ǰIcc/Sj=���Hd�3~;~���IJ)%��l8��&9��n��v4R�St}��� ڭ�KFNƗ�fab��i����x��(�I�<�HL �C������7{��M��S��!<�#��Z�i�;j]R(�ϳ	���w3̥1Y��ΚA�@DJ��{k_����������Y�M���C������y����:ͻ������A�n�)aY�(��Z�h��8`��+���n䛽�����.�0�PHS�r)����U����K5H�����3�IH�v�����ФKx�>o�#�� y@|c��,� �w�TFc�sk�?�@$�\E0(��BiApH.Шw�.�D���s ��&1�i>
49N�Q��~�L�r�R��|k�e�D���I.�@���TI&��}��)���?v��r�(6���=��,�����K/#��\��[�/�P!j�ɝB��#�,p�L�����Z�~sk���FP� ظ�F����w�� >�n      >      x������ � �     