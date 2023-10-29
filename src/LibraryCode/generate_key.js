export default {
  create_key: `def create_keys(self):
        A = create_random_vector(2, 2, N, q, 1)
        s = create_random_vector(2, 1, N, 2, 1)
        e = create_random_vector(2, 1, N, 2, 1)
        t = matrix_multiplication(A, s, e)

        return {
            'public_key': (A, t),
            'private_key': s
        }`,
};
