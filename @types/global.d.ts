type IConfig = {
    scale_cpu_threshold: number;
    release_cpu_threshold: number;
    max_instances: number | 'max';
    debug: boolean;
};

type IPMXConfig = {
    module_conf: IConfig;
};
