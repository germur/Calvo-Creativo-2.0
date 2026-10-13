import ExperimentLayout from '@/components/ExperimentLayout';
import { Island } from '@/src/site/Island';
export default function Page() { return (<ExperimentLayout
            title="Calculadora ROI SEO | The Playground"
            description="Estima el retorno de inversión de tu estrategia SEO."
            keyword="SEO ROI"
            trackNumber="04-01"
            trackTitle="ROI Calculator"
            themeColor="acid-green"
            mode="dark"
            width="wide"
        ><Island name="RoiCalculator" /></ExperimentLayout>); }
