import {
    Text,
    View,
    SafeAreaView,
    ScrollView,
    ActivityIndicator,
    RefreshControl
} from 'react-native';
import { Stack, useRouter, useLocalSearchParams } from 'expo-router';
import { useCallback, useState } from 'react';

import {
    Company, JobAbout, JobFooter, JobTabs, ScreenHeaderBtn, Specifics
} from '../../components';
import { COLORS, icons, SIZES } from '../../constants';
// import { useFetch } from '../../hook/useFetch';
import { data } from '../../utils';

const JobDetails = () => {
    const params = useLocalSearchParams();
    const router = useRouter();
    const isLoading = false;
    const error = null;

    const job_id = params.id
    // const {data, isLoading, error, refetch} = useFetch('job-details', {job_id: params.id});

    console.log('Job Detail in essence: ', job_id)
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerBackVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn
                            iconUrl={icons.left}
                            dimension='60%'
                            handlePress={() => router.back()}
                        />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn
                            iconUrl={icons.share}
                            dimension='60%'
                        />
                    ),
                    headerTitle: ''
                }}
            />
        </SafeAreaView>
    )
}

export default JobDetails;