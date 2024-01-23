import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const TermsAndConditions = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
           
            <Text style={[styles.heading, styles.blueText]}>
                Terms and Conditions.
            </Text>

            <Text style={styles.paragraph}>
                Welcome to AddRupee. We value your trust and want to ensure that you
                have a clear understanding of how we handle your personal data. By using
                our services, you agree to the terms outlined in this Privacy Policy and
                Terms of Use.
            </Text>

            <Text style={styles.heading}>1. Collection of Personal Information</Text>
            <Text style={styles.paragraph}>
                In order to provide you with our services, we collect certain personal
                information, including but not limited to your name, address, email,
                phone number, Aadhar card number, PAN card number, salary slip, and
                other relevant documents. This information is collected with your
                consent and is used for the sole purpose of facilitating our services
                and improving your user experience.
            </Text>

            <Text style={styles.heading}>2. Use of Personal Information</Text>
            <Text style={styles.paragraph}>
                Your personal data is used for the following purposes: To verify your
                identity and eligibility for our services. To communicate with you
                regarding our services, updates, and promotions. To process transactions
                and fulfill your requests. To enhance and personalize your experience
                with our platform.
            </Text>

            <Text style={styles.heading}>3. Sharing of Personal Information</Text>
            <Text style={styles.paragraph}>
                We may share your personal information under the following
                circumstances: With third-party service providers who assist us in
                delivering our services. When required by law or to protect our rights
                and interests. In the event of a merger, acquisition, or sale of all or
                a portion of our assets.
            </Text>

            <Text style={styles.heading}>4. Security Measures</Text>
            <Text style={styles.paragraph}>
                We take the security of your personal data seriously. We implement
                industry-standard security measures to protect against unauthorized
                access, disclosure, alteration, and destruction of your personal
                information.
            </Text>

            <Text style={styles.heading}>5. Consent</Text>
            <Text style={styles.paragraph}>
                By using our services, you consent to the collection, use, and sharing
                of your personal information as outlined in this Privacy Policy.
            </Text>

            <Text style={styles.heading}>6. Changes to the Privacy Policy</Text>
            <Text style={styles.paragraph}>
                We reserve the right to update or modify this Privacy Policy at any
                time. Any changes will be effective immediately upon posting the updated
                Privacy Policy on our website.
            </Text>

            <Text style={styles.heading}>Contact Us</Text>
            <Text style={styles.paragraph}>
                If you have any questions or concerns about our Privacy Policy, please
                contact us at forpradeepmishra@gmail.com.
            </Text>

            <Text style={styles.thankYou}>
                Thank you for trusting AddRupee. We are committed to safeguarding your
                privacy and providing you with a secure and enjoyable user experience.
            </Text>

            <Text style={styles.heading}> .Loan</Text>
            <Text style={styles.paragraph}>.Personal Loan</Text>
            <Text style={styles.paragraph}>.Business Loan</Text>
            <Text style={styles.paragraph}>.Home Loan</Text>
            <Text style={styles.paragraph}>.Loan Against Property</Text>
            <Text style={styles.paragraph}>.Car Loan</Text>
            <Text style={styles.paragraph}>.OD/CC/Working Capital</Text>
            <Text style={styles.paragraph}>.Credit Card</Text>
            <Text style={styles.paragraph}>.Company</Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#f8edeb',
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        color: '#05668d',
    },
    blueText: {
        color: 'black',
        marginTop: 20,
    },
    paragraph: {
        marginTop: 10,
    },
    dotContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    dot: {
        fontSize: 20,
        marginHorizontal: 5,
    },
    thankYou: {
        marginTop: 20,
        fontStyle: 'italic',
        color: 'gray',
    },
});

export default TermsAndConditions;
