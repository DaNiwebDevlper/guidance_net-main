import servicesProvider from "../../data/ServicesProvider.json"
import { LinkComp, ServiceCard } from '../../components';

const Services = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center p-9'>
      <h1 className='text-4xl font-semibold text-center mb-9'>Our Services</h1>
      <div className="flex flex-wrap gap-5 justify-center w-full">
        {servicesProvider.services.map(service => (
          <LinkComp to={`/services/${service.id}`} key={service.id} className="service-card">
            <ServiceCard servicesData={service} />
          </LinkComp>
        ))}
      </div>
    </div>
  );
};

export default Services;

