export default {
  decrypt: `def decrypt(self, ciphertext, s):
        u, v = ciphertext
        e0 = create_random_vector(1, 2, N, 1, 0)
        dv = matrix_multiplication(u, s, e0)

        d_e = []
        for i in range(len(v)):
            d_e1 = subtract(v[i], dv[0][0])
            d_e.append(d_e1)

        messages = []
        for i in range(len(v)):
            message1 = ""
            for j in range(len(d_e[i])):
                if d_e[i][j] < -q / 2 or d_e[i][j] > q / 2:
                    message1 += '1'
                else:
                    message1 += '0'
            messages.append(message1)

        return convert_message_to_original(messages)`,
};
