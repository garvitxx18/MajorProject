export default {
  encrypt: `def encrypt(self, str, KeyComponents):
        A, t = KeyComponents
        ct = len(str) % N
        while ct > 0:
            str += '#'
            ct -= 1

        vec = convert_message_to_binary(str)

        m = []

        for i in range(len(vec)):
            ss = vec[i]
            mvec = []
            for c in ss:
                if c == '0':
                    mvec.append(0)
                else:
                    mvec.append(-q)
            m.append(mvec)

        r = create_random_vector(1, 2, N, 2, 1)
        e1 = create_random_vector(1, 2, N, 2, 1)
        e2 = create_random_vector(1, 2, N, 1, 0)

        u = matrix_multiplication(r, A, e1)
        V = matrix_multiplication(r, t, e2)

        v = []
        for i in range(len(m)):
            v1 = add(V[0][0], m[i])
            v.append(v1)

        return u, v`,
};
